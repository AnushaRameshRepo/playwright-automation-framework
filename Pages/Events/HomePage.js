class HomePage {
    constructor(page){
        this.page=page;
        this.browseEventsButton=page.locator("span:has-text('Browse Events →')");
        this.bookingsButton=page.getByRole("button",{name:'My Bookings'});
        this.viewAllEventsLink=page.getByRole("link",{name:'View all →'});
        this.featuredTag=page.locator("article[id='event-card'] span[class*='bg-emerald']");
        this.eventsCard=page.locator("article[id='event-card']");
    }
    
}
module.exports={HomePage};
