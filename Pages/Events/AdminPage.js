class AdminPage{
    constructor(page){
        this.page=page;
        this.titleTextbox=page.getByTestId("event-title-input");
        this.descriptionTextbox=page.getByPlaceholder("Describe the event…");
        this.categoryDropdown=page.locator("select[id='category']");
        this.cityTextbox=page.locator("input[id='city']");
        this.venuTextbox=page.locator("#venue");
        this.dateTime=page.locator("input[type='datetime-local']");
        this.priceTextbox=page.locator("input[id*='price']");
        this.seatsTextbox=page.locator("#total-seats");
        this.addEventButton=page.getByTestId("add-event-btn");
        this.dateTimeErrorMessage=page.locator("p[class*='text-red']");
        this.successMessage=page.locator("div[class*='pointer-events-auto']");
        this.listOfEvents=page.locator("tbody tr[id='event-table-row']");
        this.deleteButton=page.locator("button[id='delete-event-btn']");
        this.confirmDeleteButton=page.getByTestId("confirm-dialog-yes");
        this.deleteDialogText=page.locator("div[role='dialog'] p");
    }
    async fillCreateEventForm(title,category,city,venue,price,dateTime="2027-05-25T12:00",seats){
        await this.titleTextbox.fill(title);
        await this.categoryDropdown.selectOption(category);
        await this.cityTextbox.fill(city);
        await this.venuTextbox.fill(venue);
        await this.priceTextbox.fill(price);
        await this.dateTime.fill(dateTime);
        await this.seatsTextbox.fill(seats);
    }
} 
module.exports={AdminPage};