const db = require('./connection');
const { Category, Project, Map, Admin, Testimonial } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { categoryName: 'Libraries/Schools' },
        { categoryName: 'Healthcare/Hospice' },
        { categoryName: 'Commercial/Office' },
        { cateogryName: 'Retail/Restaurant' },
        { categoryName: 'Industrial/Transport Hubs' }
    ]);

    console.log('CATEGORIES SEEDED');

    await Location.deleteMany();

    const locations = await Location.insertMany([
        {
            latitude: '',
            longitude: ''
        }
    ]);

    console.log('locations seeded')

    await Admin.deleteMany();

    await Admin.create({
        adminName: 'Jessica A. Walther',
        adminEmail: 'jessica@gmail.com',
        password: 'password12345',
        address: 'Slinger, WI'
    });

    console.log('admin seeded');

    await Project.deleteMany();

    await Project.create([
        {
            projectName: '',
            description: '',
            image: '',
            projectDate: '',
            cityState: '',
            location: 'locations[]._id',
            category: 'categories[]._id',
            company: '',
            WC: ''
        }
    ]);

    console.log('projects seeded');

    process.exit();
})
    //     //  name, description, image, date,location(city,State),category
    //     {
    //         project_name: 'G&E Credit Union,',
    //         category: categories[2]._id,
    //         description:
    //             'New Facility Development',
    //         image: 'image.jpg',
    //         date: 2016,
    //         city: 'Rock Island',
    //         state: 'IL',
    //         location: {
    //             latitude: 41.5095,
    //             longitude: 90.5787,
    //         }

    //     },
    //     {
    //         project_name: 'Hughes Federal Credit Union',
    //         category: categories[2]._id,
    //         description:
    //             'New Facility Development',
    //         image: 'image.jpg',
    //         date: 2016,
    //         city: 'Tuscan',
    //         state: 'AZ',
    //         location: {
    //             latitude: 34.234512,
    //             longitude: -112.015342,
    //         }
    //     },
    //     {
    //         project_name: 'Landmark Credit Union',
    //         category: categories[2]._id,
    //         description:
    //             'New Facility Development',
    //         image: 'image.jpg',
    //         date: 2016,
    //         city: 'Muskego',
    //         state: 'WI',
    //         location: {
    //             latitude: 34.234512,
    //             longitude: -112.015342,
    //         }
    //     },
    //     {
    //         project_name: 'Heritage Credit Union',
    //         category: categories[2]._id,
    //         description:
    //             'New Facility Development',
    //         image: 'image.jpg',
    //         date: 2016,
    //         city: 'Machesney Park',
    //         state: 'IL',
    //         location: {
    //             latitude: 34.234512,
    //             longitude: -112.015342,
    //         }
    //     }
    //     // ,
    //     // {
    //     //     project_name: '',
    //     //     category: categories[0]._id,
    //     //     description:
    //     //         '',
    //     //     image: 'image.jpg',
    //     //     date: 1,
    //     //     city: '',
    //     //     state: ''
    //     //location :{
    //         // latitude: ,
    //         // longitude
    //     // }
    //     // }
    // ]);

    // console.log('Projects seeded');

    await Message.deleteMany();

    const messages = await Message.insertMany([
        {
            userName: 'Bill Wonder',
            company: '',
            userEmail: 'bill@gmail.com',
            purpose: 'Ask a question',
            userMessage: 'What is your availability for the next few months?'
        },
        {
            userName: 'Ashley Bunt',
            company: 'Pottery Barn',
            userEmail: 'ashley@gmail.com',
            purpose: 'Leave a comment',
            userMessage: 'Thank you for your work.'
        },
        {
            userName: 'Kelly Woodman',
            company: 'Woodman lighting',
            userEmail: 'kelly@gmail.com',
            purpose: 'Request a quote',
            userMessage: 'I am looking for a lighitng plan and quote for a remodel of the home of a client.'
        },
        {
            userName: 'Sully Dogman',
            company: 'Bright for you',
            userEmail: 'sully@gmail.com',
            purpose: 'Provide a testimonial',
            userMessage: 'Jessica is very professional, communicative, and open to new ideas for design. She is simply the best to work with!'
        }
    ]);

    console.log('messages seeded')

    await Testimonial.deleteMany();

    const testimonials = await Testimonial.insertMany([
        {
            tstName: 'Joe Light',
            company: 'Lighting Design',
            tstMessage: 'Woodland Consulting is the best in the business!'
        },
        {
            tstName: 'Jill Bulb',
            company: 'Lighting for all',
            tstMessage: 'Jessica at Woodland Consulting is a great business partner and really dedicates her time to each job.'
        },
        {
            tstName: 'Jack Bright',
            company: 'Lighting Bright',
            tstMessage: 'I would recommend Woodland Consulting for any lighting project!'
        }
    ]);

    console.log('testimonials seeded')
// });
