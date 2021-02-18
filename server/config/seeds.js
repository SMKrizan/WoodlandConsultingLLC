const db = require('./connection');
const { Category, Project, Map, Admin, Testimonial } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { categoryName: 'Libraries/Schools' },
        { categoryName: 'Healthcare/Hospice' },
        { categoryName: 'Commercial/Office' },
        { categoryName: 'Retail/Restaurant' },
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
            latitude: '45.1812858581543',
            longitude: '-89.68519592285156'
        },
        {
            latitude: '44.0869329',
            longitude: '-103.2274481'
        },
        {
            latitude: '32.5369356',
            longitude: '-93.6952689'
        },
        {
            latitude: '41.139981',
            longitude: '-104.820246'
        },
        {
            latitude: '43.1775302',
            longitude: '-83.7831059'
        },
        {
            latitude: '42.9572508',
            longitude: '-83.8305144'
        },
        {
            latitude: '41.5910323',
            longitude: '-93.6046655'
        },
        {
            latitude: '32.5221828',
            longitude: '-93.7651944'
        },
        {
            latitude: '41.7571701',
            longitude: '-88.3147539'
        },
        {
            latitude: '41.0944767',
            longitude: '-88.4250597'
        },
        {
            latitude: '43.978576',
            longitude: '-90.5040214'
        },
        {
            latitude: '33.0206179',
            longitude: '-80.1747537'
        },
        {
            latitude: '41.5910323',
            longitude: '-93.6046655'
        },
        {
            latitude: '42.9614039',
            longitude: '-88.0125865'
        },
        {
            latitude: '43.7508284',
            longitude: '-87.71453'
        },
        {
            latitude: '34.1476452',
            longitude: '-118.1444779'
        },
        // 20
        {
            latitude: '38.029306',
            longitude: '-78.4766781'
        },
        {
            latitude: '45.3324647',
            longitude: '-93.7460804'
        },
        {
            latitude: '35.4729886',
            longitude: '-97.5170536'
        },
        {
            latitude: '45.159967',
            longitude: '-92.9932734'
        },
        {
            latitude: '39.9403453',
            longitude: '-82.0131924'
        },
        {
            latitude: '43.1352881',
            longitude: '-87.9356423'
        },
        {
            latitude: '35.4729886',
            longitude: '-97.5170536'
        },
        {
            latitude: '35.2225717',
            longitude: '-97.4394816'
        },
        {
            latitude: '47.6038321',
            longitude: '-122.3300624'
        },
        {
            latitude: '43.074761',
            longitude: '-89.3837613'
        },
        // 30
        {
            latitude: '43.2219088',
            longitude: '-87.9822969'
        },
        {
            latitude: '43.9349223',
            longitude: '-93.6974928'
        },
        {
            latitude: '42.5685582',
            longitude: '-83.3733531'
        },
        {
            latitude: '27.7477253',
            longitude: '-97.4014129'
        },
        {
            latitude: '41.8789942',
            longitude: '-87.8436412'
        },
        {
            latitude: '42.9190347',
            longitude: '-87.9496972'
        },
        {
            latitude: '35.767368',
            longitude: '-80.79693'
        },
        {
            latitude: '43.076113',
            longitude: '-88.7742707'
        },
        {
            latitude: '43.0349931',
            longitude: '-87.922497'
        },
        {
            latitude: '42.6330703',
            longitude: '-88.6437138'
        },
        {
            latitude: '42.7260523',
            longitude: '-87.7825242'
        },
        {
            latitude: '43.0798281',
            longitude: '-89.4306643'
        },
        {
            latitude: '43.0349931',
            longitude: '-87.922497'
        },
        {
            latitude: '32.9337381',
            longitude: '-97.0788754'
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
        },
        {
            projectName: 'WYHY Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Cheyenne, WY',
            location: 'locations[7]._id',
            category: 'categories[2]._id',
            company: 'WYHY',
            WC: 'True'
        },
        {
            projectName: 'Dort Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Vienna Township, MI',
            location: 'locations[8]._id',
            category: 'categories[2]._id',
            company: 'Dort',
            WC: 'True'
        },
        {
            projectName: 'Dort Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Swartz Creek, MI',
            location: 'locations[9]._id',
            category: 'categories[2]._id',
            company: 'Dort',
            WC: 'True'
        },
        {
            projectName: 'Serve Credit Union',
            description: 'Remodel',
            image: '',
            projectDate: '',
            cityState: 'Des Moines, IA',
            location: 'locations[10]._id',
            category: 'categories[2]._id',
            company: 'Serve',
            WC: 'True'
        },
        {
            projectName: 'Carter Credit Union',
            description: 'New multi-story facility',
            image: '',
            projectDate: '',
            cityState: 'Shreveport, LA',
            location: 'locations[11]._id',
            category: 'categories[2]._id',
            company: 'Carter',
            WC: 'True'
        },
        {
            projectName: 'Northstar Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Aurora, IL',
            location: 'locations[12]._id',
            category: 'categories[2]._id',
            company: 'NorthStar',
            WC: 'True'
        },
        {
            projectName: 'Bank of Pontiac',
            description: 'Remodel',
            image: '',
            projectDate: '',
            cityState: 'Dwight, IL',
            location: 'locations[13]._id',
            category: 'categories[2]._id',
            company: 'Pontiac',
            WC: 'True'
        },
        {
            projectName: '1st Community Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Tomah, WI',
            location: 'locations[14]._id',
            category: 'categories[2]._id',
            company: '1st Community',
            WC: 'True'
        },
        {
            projectName: 'Bayer Heritage Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Summerville, SC',
            location: 'locations[15]._id',
            category: 'categories[2]._id',
            company: 'Bayer',
            WC: 'True'
        },
        {
            projectName: 'Financial Plus Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Des Moines, IA',
            location: 'locations[16]._id',
            category: 'categories[2]._id',
            company: 'Financial Plus',
            WC: 'True'
        },
        {
            projectName: 'Landmark Credit Union',
            description: 'Site Lighting Layout',
            image: '',
            projectDate: '',
            cityState: 'Greenfield, WI ',
            location: 'locations[17]._id',
            category: 'categories[2]._id',
            company: 'LandMark',
            WC: 'True'
        },
        {
            projectName: 'Kohler Credit Union',
            description: 'Site Lighting Layout',
            image: '',
            projectDate: '',
            cityState: 'Sheboygan, WI',
            location: 'locations[18]._id',
            category: 'categories[2]._id',
            company: 'Kohler',
            WC: 'True'
        },
        {
            projectName: 'LA Financial Credit Union',
            description: 'Lighting Review and Redesign',
            image: '',
            projectDate: '',
            cityState: 'Pasadena, CA ',
            location: 'locations[19]._id',
            category: 'categories[2]._id',
            company: 'LA Financial',
            WC: 'True'
        },
        {
            projectName: 'C&F Bank',
            description: 'Building Remodel',
            image: '',
            projectDate: '',
            cityState: 'Charlottesville, VA',
            location: 'locations[20]._id',
            category: 'categories[2]._id',
            company: 'C&F',
            WC: 'True'
        },
        {
            projectName: 'MINNCO Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Big Lake, MN',
            location: 'locations[21]._id',
            category: 'categories[2]._id',
            company: 'MINNCO',
            WC: 'True'
        },
        {
            projectName: 'True Sky Credit Union',
            description: 'Building Remodel',
            image: '',
            projectDate: '',
            cityState: 'Oklahoma City, OK',
            location: 'locations[22]._id',
            category: 'categories[2]._id',
            company: 'True Sky',
            WC: 'True'
        },
        {
            projectName: 'Heartland Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Hugo, MN',
            location: 'locations[23]._id',
            category: 'categories[2]._id',
            company: 'Heartland',
            WC: 'True'
        },
        {
            projectName: 'Bayer Heritage Federal Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: ' Zanesville, OH',
            location: 'locations[24]._id',
            category: 'categories[2]._id',
            company: 'Bayer Heritage',
            WC: 'True'
        },
        {
            projectName: 'Landmark Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Glendale, WI',
            location: 'locations[25]._id',
            category: 'categories[2]._id',
            company: 'Landmark',
            WC: 'True'
        },
        {
            projectName: 'True Sky Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Oklahoma City, OK',
            location: 'locations[26]._id',
            category: 'categories[2]._id',
            company: 'True Sky',
            WC: 'True'
        },
        {
            projectName: 'True Sky Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Norman, OK',
            location: 'locations[27]._id',
            category: 'categories[2]._id',
            company: 'True Sky',
            WC: 'True'
        },
        {
            projectName: 'Waterfront Credit Union',
            description: 'Building Renovation',
            image: '',
            projectDate: '',
            cityState: 'Seattle, WA',
            location: 'locations[28]._id',
            category: 'categories[2]._id',
            company: 'Waterfront',
            WC: 'True'
        },
        {
            projectName: 'Heartland Credit Union',
            description: 'Building Renovation',
            image: '',
            projectDate: '',
            cityState: 'Madison, WI',
            location: 'locations[29]._id',
            category: 'categories[2]._id',
            company: 'Heartland',
            WC: 'True'
        },
        {
            projectName: 'Landmark Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: ' Mequon, WI',
            location: 'locations[30]._id',
            category: 'categories[2]._id',
            company: 'Landmark',
            WC: 'True'
        },
        {
            projectName: 'Cedar Point Credit Union',
            description: 'New facility',
            image: '',
            projectDate: '',
            cityState: 'Waldorf, MI ',
            location: 'locations[31]._id',
            category: 'categories[2]._id',
            company: 'Cedar Point',
            WC: 'True'
        },
        {
            projectName: 'Alliance Catholic Credit Union',
            description: 'Building Remodel',
            image: '',
            projectDate: '',
            cityState: 'West Bloomfield Township, MI',
            location: 'locations[32]._id',
            category: 'categories[2]._id',
            company: 'Alliance',
            WC: 'True'
        },
        {
            projectName: 'Chemcel Federal Credit Union',
            description: 'Building Remodel',
            image: '',
            projectDate: '',
            cityState: 'Corpus Christi, TX',
            location: 'locations[33]._id',
            category: 'categories[2]._id',
            company: 'Chemcel',
            WC: 'True'
        },
        {
            projectName: 'ComEd',
            description: 'Maywood Tech Center Emergency Lighting Upgrade',
            image: '',
            projectDate: '',
            cityState: 'Maywood, IL',
            location: 'locations[34]._id',
            category: 'categories[4]._id',
            company: 'ComEd',
            WC: 'True'
        },
        {
            projectName: 'Commercial Remodel ',
            description: 'Emergency Lighting Upgrade',
            image: '',
            projectDate: '',
            cityState: 'Oak Creek, WI',
            location: 'locations[35]._id',
            category: 'categories[2]._id',
            company: 'Commercial',
            WC: 'True'
        },
        {
            projectName: 'Industrial Facility',
            description: 'Site lighting Layout',
            image: '',
            projectDate: '',
            cityState: 'Oak Creek, WI',
            location: 'locations[36]._id',
            category: 'categories[4]._id',
            company: 'Industrial',
            WC: 'True'
        },
        {
            projectName: 'Johnson Creek Retail',
            description: 'Site Lighting Layout',
            image: '',
            projectDate: '',
            cityState: 'Johnson Creek, WI ',
            location: 'locations[37]._id',
            category: 'categories[3]._id',
            company: 'Johnson Creek',
            WC: 'True'
        },
        {
            projectName: 'Dye My Darling',
            description: 'Salon Renovation',
            image: '',
            projectDate: '',
            cityState: 'Milwaukee, WI',
            location: 'locations[38]._id',
            category: 'categories[3]._id',
            company: 'Dye My Darling',
            WC: 'True'
        },
        {
            projectName: 'Lake Lawn Resort Marina Building',
            description: 'Site Lighting Layout',
            image: '',
            projectDate: '',
            cityState: 'Delavan, WI ',
            location: 'locations[39]._id',
            category: 'categories[4]._id',
            company: 'Lake Lawn Resort',
            WC: 'True'
        },
        {
            projectName: 'Gateway Technical College',
            description: 'Various remodeling projects',
            image: '',
            projectDate: '',
            cityState: 'Racine, WI',
            location: 'locations[40]._id',
            category: 'categories[0]._id',
            company: 'Gateway Technical College',
            WC: 'False'
        },
        {
            projectName: 'University of Wisconsin Madison – School of Human Ecology',
            description: 'Addition and remodel',
            image: '',
            projectDate: '',
            cityState: 'Madison WI',
            location: 'locations[41]._id',
            category: 'categories[0]._id',
            company: 'University of Wisconsin Madison',
            WC: 'False'
        },
        {
            projectName: 'Colliers Corporate Office',
            description: 'New Office',
            image: '',
            projectDate: '',
            cityState: 'Milwaukee, WI ',
            location: 'locations[42]._id',
            category: 'categories[2]._id',
            company: 'Colliers',
            WC: 'False'
        },
        {
            projectName: 'DL Rogers Corporate Office',
            description: '3 Story high profile office building for owner – coordinated lighting design, deliverables and construction',
            image: '',
            projectDate: '',
            cityState: 'Grapevine, TX',
            location: 'locations[43]._id',
            category: 'categories[2]._id',
            company: 'DL Rogers',
            WC: 'False'
        },
    ]);

    console.log('projects seeded');

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

    process.exit();
})

