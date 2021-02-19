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
            latitude: '41.472351',
            longitude: '-90.583572'
        },
        {
            latitude: '32.222607',
            longitude: '-110.974709'
        },
        {
            latitude: '42.911700',
            longitude: '-88.121520'
        },
        {
            latitude: '42.3472406',
            longitude: '-89.0389956'
        },
        {
            latitude: '',
            longitude: ''
        },
    ]);

    console.log('locations seeded')

    await Owner.deleteMany();

    await Owner.create({
        ownerName: 'Jessica A. Walther',
        ownerEmail: 'jessica@gmail.com',
        password: 'password12345',
        address: 'Slinger, WI'
    });

    console.log('admin seeded');

    await Project.deleteMany();

    await Project.create([
        {
            projectName: 'G&E Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Rock Island, IL',
            location: 'locations[0]._id',
            category: 'categories[2]._id',
            company: 'G&E',
            WC: 'True'
        },
        {
            projectName: 'Hughes Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Tucson, AZ',
            location: 'locations[1]._id',
            category: 'categories[2]._id',
            company: 'Hughes',
            WC: 'True'
        },
        {
            projectName: 'Landmark Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Muskego, WI',
            location: 'locations[2]._id',
            category: 'categories[2]._id',
            company: 'Landmark',
            WC: 'True'
        },
        {
            projectName: 'Heritage Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Machesney Park, IL',
            location: 'locations[3]._id',
            category: 'categories[2]._id',
            company: 'Heritage',
            WC: 'True'
        },
        {
            projectName: 'Park City Credit Union',
            description: 'New multi-story facility',
            image: '',
            projectDate: '',
            cityState: 'Merrill, WI',
            location: 'locations[4]._id',
            category: 'categories[2]._id',
            company: 'Park City',
            WC: 'True'
        },
        {
            projectName: 'Black Hills Federal Credit Union',
            description: 'New multi-story facility',
            image: '',
            projectDate: '',
            cityState: 'Rapid City, SD',
            location: 'locations[5]._id',
            category: 'categories[2]._id',
            company: 'Black Hills',
            WC: 'True'
        },
        {
            projectName: 'Carter Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Bossier City, LA',
            location: 'locations[6]._id',
            category: 'categories[2]._id',
            company: 'Carter',
            WC: 'True'
        }
    ]);

    console.log('projects seeded');

    process.exit();
})
    await Message.deleteMany();

    const messages = await Message.insertMany([
        {
            userName: 'Bill Wonder',
            userCompany: '',
            userEmail: 'bill@gmail.com',
            purpose: 'Ask a question',
            userMessage: 'What is your availability for the next few months?'
        },
        {
            userName: 'Ashley Bunt',
            userCompany: 'Pottery Barn',
            userEmail: 'ashley@gmail.com',
            purpose: 'Leave a comment',
            userMessage: 'Thank you for your work.'
        },
        {
            userName: 'Kelly Woodman',
            userCompany: 'Woodman lighting',
            userEmail: 'kelly@gmail.com',
            purpose: 'Request a quote',
            userMessage: 'I am looking for a lighitng plan and quote for a remodel of the home of a client.'
        },
        {
            userName: 'Sully Dogman',
            userCompany: 'Bright for you',
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
            tstcompany: 'Lighting Design',
            tstMessage: 'Woodland Consulting is the best in the business!'
        },
        {
            tstName: 'Jill Bulb',
            tstcompany: 'Lighting for all',
            tstMessage: 'Jessica at Woodland Consulting is a great business partner and really dedicates her time to each job.'
        },
        {
            tstName: 'Jack Bright',
            tstcompany: 'Lighting Bright',
            tstMessage: 'I would recommend Woodland Consulting for any lighting project!'
        }
    ]);

    console.log('testimonials seeded')
// });
