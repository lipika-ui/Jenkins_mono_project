context('POC',()=>{

    beforeEach(() => cy.visit('/'));

    it('should display Test Component heading', () => {
          cy.get('h1.paraTest').should('have.text','Test Component!');
     });


     it('should give api mock data value for key:public',()=>{

        //create cypress server 
        cy.server();

        //calling API
        cy.route({
            method:"GET",
            url:"https://directus.projects.prodaptconsulting.com/directus/items/basic_pages/1",
            response:{"data":{"id":1,"status":"published","owner":2,
            "created_on":"2020-11-11T05:19:16+00:00","modified_by":2,
            "modified_on":"2020-11-11T05:19:16+00:00",
            "title":"Triple Pack","description":"<p>desciptoin<\/p>"},"public":true},
        })

        cy.get('p.directusApi1').should('have.text','Triple Pack');


     });


})