const db = require('./connection');
const { Category, Project, Map, Admin } = require('../models');

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

    await Admin.deleteMany();

    await Admin.create({
        firstName: 'Jessica A.',
        lastName: 'Walther',
        email: 'jessica@gmail.com',
        password: 'password12345'
    });

    console.log('admin seeded');

    await Project.deleteMany();

    const projects = await Project.insertMany([
        {
            name: '',
            description: '',
            image: '',
            date: '',
            location: '',
            category: 'categories[]._id'
        }
    ])

    console.log('projects seeded');

    await Map.deleteMany();

    await Map.create([
        {
            projectName: '',
            description: '',
            category: 'categories[]._id',
            cityState: '',
            longtitude: '',
            latitude: '',
            projectDate: ''
        }
    ]);

    console.log('map seeded');

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

    // await User.deleteMany();
    // await User.create({
    //     firstName: 'username',
    //     lastName: 'lastname',
    //     email: 'test@testmail.com',
    //     password: 'password12345',
    //     projects: [projects[0]._id, projects[0]._id, projects[1]._id]
    // });
    // console.log('users seeded');

//     process.exit();
// });
