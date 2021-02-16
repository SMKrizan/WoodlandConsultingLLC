const db = require('./connection');
const { User, Project, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Libraries/Schools' },
        { name: 'Healthcare/Hospice' },
        { name: 'Commercial/Office' },
        { name: 'Retail/Restaurant' },
        { name: 'Industrial/Transport Hubs' }
    ]);

    console.log('CATEGORIES SEEDED');

    await Project.deleteMany();

    const projects = await Project.insertMany([
        //  name, description, image, date,location(city,State),category
        {
            project_name: 'G&E Credit Union,',
            description:
                'New Facility Development',
            image: 'image.jpg',
            date: 2016,
            city: 'Rock Island',
            state: 'IL',
            // latitude: 41.5095,
            // longtitude: 90.5787,
            category: categories[2]._id,

        },
        {
            project_name: 'Hughes Federal Credit Union',
            category: categories[2]._id,
            description:
                'New Facility Development',
            image: 'image.jpg',
            date: 2016,
            city: 'Tuscan',
            state: 'AZ'

        },
        {
            project_name: 'Landmark Credit Union,',
            category: categories[2]._id,
            description:
                'New Facility Development',
            image: 'image.jpg',
            date: 2016,
            city: 'Muskego',
            state: 'WI'
        },
        {
            project_name: 'Heritage Credit Union',
            category: categories[2]._id,
            description:
                'New Facility Development',
            image: 'image.jpg',
            date: 2016,
            city: 'Machesney Park',
            state: 'IL'
        }
        // ,
        // {
        //     project_name: '',
        //     category: categories[0]._id,
        //     description:
        //         '',
        //     image: 'image.jpg',
        //     date: 1,
        //     city: '',
        //     state: ''
        // }
    ]);

    console.log('Projects seeded');

    await User.deleteMany();
    await User.create({
        firstName: 'username',
        lastName: 'lastname',
        email: 'test@testmail.com',
        password: 'password12345',
        projects: [projects[0]._id, projects[0]._id, projects[1]._id]
    });
    console.log('users seeded');

    process.exit();
});
