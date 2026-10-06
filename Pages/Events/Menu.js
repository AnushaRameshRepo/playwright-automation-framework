class Menu{
    constructor(page){
        this.page=page;
        this.homeLink=page.getByRole("link",{name:"Home"});
        this.eventsLink=page.getByRole("link",{name:"Events"});
        this.bookingsLink=page.getByRole("link",{name:"My Bookings"});
        this.ApiDocsLink=page.getByRole("link",{name:"API Docs"});
        this.AdminButton=page.getByRole("button",{name:"Admin"});
        this.logoutButton=page.getByRole("button",{name:"Logout"});
    }

}
module.exports={Menu};