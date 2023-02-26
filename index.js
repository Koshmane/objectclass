// QUESTION 1 

// Using the constructor method, create an InstagramPost() constructor 
// function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 



function instagramPost(handleOfAuthor, content, anImagelinkPostedByTheAuthorOfThePost, 
    numberOfViews, numberOfLikes, 

    )
    
    {
        this.handleOfAuthor = handleOfAuthor;
        this.content = content;
        this.anImagelinkPostedByTheAuthorOfThePost =  anImagelinkPostedByTheAuthorOfThePost;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
    }

    const instagramPost1 = new instagramPost('teebaby4real', 'digitalmarketing', 'teebaby4real//insta', 3000, 1000)

    console.log(instagramPost1);

    // QUESTION 2  Create 2 Instagram post objects from the constructor function you created above


    const instagramPost2 = new instagramPost('jaye4ever', 'sewingclass', 'sewingmentor//insta', 1500, 300)
    console.log(instagramPost2)
    
    const instagramPost4 = new instagramPost('electionviews', 'electionDeliberations', 'electionDeliberations//insta', '1.5m', 200000)
    
    console.log(instagramPost4)


//     QUESTION 3    Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
// Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

const createPerson = {
    name:'Alex',
    age: 21,
    location:'Ghana',
    musa: {
            firstName: 'Musa',
            lastname: 'Dawodu',
            age: 19,
            street: 'Lekki',
            city: 'Lagos-state',
            country:'Nigeria',
    }
}
console.log(createPerson)


        const createJambScores = {
            ENG : 70,
            GOVT: 85,
            LIT : 82,
            CRK : 94,
            musaJambScores : {
                firstName: 'Musa',
                lastname: 'Dawodu',
                age: 19,
                street: 'Lekki',
                city: 'Lagos-state',
                country:'Nigeria',
            }

        }
        console.log(createJambScores)



        // QUESTION 4  What are the different ways you can clone an object? Give examples for each of them.
// Method1: Object.assign


const kitchen = { cooker: 'cooking',
gasCylinder: 'lightingcooker',
refrigerator: 'coolingdrinks',
cupboard: 'keepingstuff',
}

const kitchenUpstairs = Object.assign({}, kitchen);
console.log(kitchenUpstairs);
console.log(kitchen);

kitchenUpstairs . cooker = 'firewood';
console.log ('After changing cooker in the kitchenUpstairs')
console.log(kitchenUpstairs)
console.log(kitchen)



// METHOD 2= Spread syntax

const kitchenDownstairs = {...kitchen};
console.log({kitchenDownstairs})




kitchenDownstairs.cupboard = 'keepingCondiments';
console.log({kitchenDownstairs});




        


            
        // QUESTION 5: As Nigeria goes to the polls, here is an object representing some of the Presidential 
        // Candidates:

        // USING For...In

        // const presidentialCandidates = {
        //     AAC: 'Omoyele Sowore',
        //     ACCORD: 'Christopher Imumolen',
        //     APC: 'Bola Ahmed Tinubu',
        //     LP: 'Peter Obi',
        //     NNPP: 'Rabiu Kwankwaso',
        //     PDP: 'Atiku Abubakar',
        //  }
         
        //  for(const property in presidentialCandidates) {
        //     console.log(property);
        //  }


         const presidentialCandidates = {
                AAC: 'Omoyele Sowore is the presidential candidate of AAC',
                ACCORD: 'Christopher Imumolen is the presidential candidate of ACCORD',
                APC: 'Bola Ahmed Tinubu is the presidential candidate of APC',
                LP:  'Peter Obi is the presidential candidate of LP',
                PDP: 'Atiku Abubakar is the presidential candidate of PDP',
                NNPP: 'Rabiu Kwankwaso is the presidential candidate of NNPP',
         }

            for(const property in presidentialCandidates) {

                console.log(presidentialCandidates[property]);
            
                }
           