let fortunes = [
"An acquaintance of the past will affect you in the near future" ,
"An agreeable romance might begin to take on the appearance" ,
"An important person will offer you support" ,
"An inch of time is an inch of gold" ,
"Any day above ground is a good day",
]

const contactForm = [
    {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {

        //choose random fortune
        let randomIndexes = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndexes];

        res.status(200).send(randomFortune);
    },
    receipt: (req,res) => {
        console.log(res.body)
        let existingFortunes = req.body.myFortune
        for (let i = 0; i < fortunes.length; i++) {
            if (fortunes[i].myFortune === existingFortunes) {
                fortunes.splice(i, 1)
                res.status(200).send(`The fortune you didn't like has been deleted`)
            }
            res.status(401).send(`The fortune remains`)
        }
    },
    contact: (req, res) => {
        console.log(req.body)
        const forms = contactForm.filter(forms => forms.email === req.body.email)
        if (contactForm[0].message === req.body.message){
            res.status(200).send(`Thank you for your message! We'll contact you back as soon as possible`)
        }
        else {
            res.sendStatus(401)
        }
    },

}