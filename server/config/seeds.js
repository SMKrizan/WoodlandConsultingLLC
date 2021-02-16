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

    console.log('categories seeded');

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

    await Admin.deleteMany();

    await Admin.create({
        firstName: 'Jessica A.',
        lastName: 'Walther',
        email: 'jessica@gmail.com',
        password: 'password12345'
    });

    console.log('admin seeded');

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