
const { test, expect } = require('../../FrameworkCore/fixtures/fixtures.js');
const { EventsPage } = require('../../Pages/Events/EventsPage.js');
const { fromNow } = require("../../FrameworkCore/Utility/dateUtil.js");
const eventDetails = require('../TestData/eventDetails.json');

test.fixme('Event Page Filter Test', async ({ eventsHomePage, eventsPage }) => {
    const cardCount = await eventsHomePage.eventsCard.count();
    const featuredTagCount = await eventsHomePage.featuredTag.count();
    expect(cardCount).toBe(featuredTagCount);
    await eventsHomePage.browseEventsButton.click();
    await eventsPage.addEventButton.waitFor()
    await test.step('Events page control are visible', async () => {
        await expect.soft(eventsPage.searchTextBox, "Search events textbox is not visible").toBeVisible();
        await expect.soft(eventsPage.categoryFilter, "Category filter is not visible").toBeVisible();
        await expect.soft(eventsPage.cityFilter, "City filter is not visible").toBeVisible();
        await expect.soft(eventsPage.addEventButton, "Add event button is not visible").toBeVisible();
    });
    await eventsPage.page.waitForLoadState('networkidle');
    await eventsPage.filterEvents("Concert");
    await expect(eventsPage.categoryTag.filter({ hasNot: eventsPage.page.getByText('Concert', { exact: true }) })).toHaveCount(0);

    await eventsPage.clearFilterButton.click();
    await eventsPage.filterEvents("", "Delhi");
    await eventsPage.page.waitForLoadState('networkidle');
    const eventCardDetails = await eventsPage.getEventCardDetails();
    expect(await eventCardDetails.eventLocation).toContain("Delhi");
});

test('Event test', async ({ adminPage, eventsPage }) => {
    await eventsPage.addEventButton.click();
    for (const dateCase of eventDetails.dateCases) {
        await test.step('Date ${dateCases.name}', async () => {
            await adminPage.fillCreateEventForm(eventDetails.eventDetails.title, eventDetails.eventDetails.category, eventDetails.eventDetails.city, eventDetails.eventDetails.location, eventDetails.eventDetails.price, fromNow(dateCase.fromNow), eventDetails.eventDetails.seats);

            await adminPage.addEventButton.click();
            if (dateCase.expected === 'success') {
                expect(await adminPage.successMessage.textContent()).toContain("Event created!");
                adminPage.page.reload();
                const row = adminPage.listOfEvents.filter({ hasText: eventDetails.eventDetails.title })
                await expect(row).toBeVisible();
                await row.locator(adminPage.deleteButton).click();
                await adminPage.confirmDeleteButton.click();
                expect(await adminPage.successMessage.textContent()).toContain("Event deleted");
            }
            else {
                expect(await adminPage.dateTimeErrorMessage).toHaveText("Must be a future date");
            }
        })
    }

})