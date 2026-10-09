const {Toasts}=require('./Toasts');
class AdminPage{
    constructor(page){
        this.page=page;
        this.toast=new Toasts(page);    
        this.titleTextbox=page.getByTestId("event-title-input");
        this.descriptionTextbox=page.getByPlaceholder("Describe the event…");
        this.categoryDropdown=page.locator("select[id='category']");
        this.cityTextbox=page.locator("input[id='city']");
        this.venueTextbox=page.getByLabel("Venue");
        this.dateTime=page.getByLabel("Event Date & Time");
        this.priceTextbox=page.getByLabel("Price ($)");
        this.seatsTextbox=page.getByLabel("Total Seats");
        this.addEventButton=page.getByTestId("add-event-btn");
        this.dateTimeErrorMessage=page.locator("p[class*='text-red']");
        this.listOfEvents=page.locator("tbody tr[id='event-table-row']");
        this.deleteButton=page.getByTestId("delete-event-btn");
        this.confirmDeleteButton=page.getByTestId("confirm-dialog-yes");
        this.deleteDialogText=page.locator("div[role='dialog'] p");
    }
    async fillCreateEventForm(title,category,city,venue,price,dateTime,seats){
        await this.titleTextbox.fill(title);
        await this.categoryDropdown.selectOption(category);
        await this.cityTextbox.fill(city);
        await this.venueTextbox.fill(venue);
        await this.priceTextbox.fill(price);
        await this.dateTime.fill(dateTime);
        await this.seatsTextbox.fill(seats);
    }
} 
module.exports={AdminPage};