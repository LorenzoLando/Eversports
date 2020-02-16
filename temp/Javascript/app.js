 let aboutText = `It all started in Vienna, Austria, back in 2013: Our founder and CEO, Hanno Lippitsch, was a national volleyball player who wanted to play tennis. While browsing the net searching for tennis courts, Hanno realised how difficult it was to book a location and a time slot.
 In the era of digitalisation where people book and pay for flights, taxis or hotels within a few mouse clicks, the sports industry was still lacking an online solution to manage its business and ease its clients’ lives
So Hanno set his goal to provide professionals and business owners with a modern software tool to manage and run their business. And on the same hand we also want to offer sport lovers a great way to book their activities anywhere, anytime, from their phone, tablet or computer.
Today Eversports provides its management software to more than 2500 business owners in 8 different countries. Whether you run a yoga studio, gym or a tennis club, Eversports gives you the best tools to manage your business in a smart way and brings your marketing strategy to the next level in a digitalised world.`;
 
   new Vue({
    el:'#app',
    data:{
        aboutText: aboutText,
        dataToggle:"modal",
        dataTarget:"#exampleModal"
    },
    methods:{
      analyticTriggers : function(event){
        let identifier = event.target.id;
       
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': identifier
        });
        
        
        if(identifier.includes('Pack')){
            var contract =  0;
            if(identifier.includes('silver')){
                contract = 1;
            } else if(identifier.includes('gold')) {
                contract = 2;
            } else {
                contract = 3;
            }
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
             'event': 'fireRemarketingTag',
             'google_tag_params': {
                  'ecomm_prodid': contract
            }
         });
          
        }
      },
      formSubmit: function(event){
        document.querySelector('#formModal').addEventListener('submit', () => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            'event': 'formSubmitted'
            
            });
        });
        
      }
    },
    computed:{

    }
});