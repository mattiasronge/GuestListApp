new Vue ({
    el: '#app',
    data: {
        event: {
            date: '   August 14th - 16th',
            title: 'Summer Festival!',
            discription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever!"

        },
        newNameText: '',
        guestName: [],
        formSubmitClass: ""
 
    },
    methods: {
        formSubmit: function(){
            if(this.newNameText.length > 0) {
        this.guestName.push(this.newNameText)
        this.newNameText = '' 
        this.formSubmitClass = "submit"

         }
    }
}


});