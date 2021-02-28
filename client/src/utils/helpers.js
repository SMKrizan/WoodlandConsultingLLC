export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the database `shop-shop` with the version of 1
    const request = window.indexedDB.open('woodland-consulting', 1);

    // create variables to hold reference to the database, transaction (tx), and object store
    let db, tx, store;

    // if version has changed (or if this is the first time using the database), run this method and create the three object stores 
    request.onupgradeneeded = function(e) {
      const db = request.result;
      // create object store for each type of data and set "primary" key index to be the `_id` of the data
      db.createObjectStore('messages', { keyPath: '_id' });
    };

    // handle any errors with connecting
    request.onerror = function(e) {
      console.log('There was an error');
    };

    // on database open success
    request.onsuccess = function(e) {
      // save a reference of the database to the `db` variable
      db = request.result;
      // open a transaction do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');
      // save a reference to that object store
      store = tx.objectStore(storeName);

      // if there's any errors, let us know
      db.onerror = function(e) {
        console.log('error', e);
      };
      //mathod that actualy adds/changes data
      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        default:
          console.log('No valid method');
          break;
      }


      // when the transaction is complete, close the connection
      tx.oncomplete = function() {
        db.close();
      };
    };

  });
}













// // opens db connection, connects to object store, and facilitates transaction requests; wrapped in Promise to deal with async
// export function idbPromise(storeName, method, object) {
//   return new Promise((resolve, reject) => {
//     // opens connection to `woodland-consulting` db
//     const request = window.indexedDB.open("woodland-consulting", { autoIncrement: true });

//     // variables reference database, transaction, and object store
//     let db, tx, store;

//     // if version changes (or if this is first time using db), runs this method and creates object stores 
//     request.onupgradeneeded = function (e) {
//       const db = request.result;
//       // creates object store for each type of data and sets "primary" key index to data `_id`
//       db.createObjectStore("messages", { keyPath: "_id"});
//       db.createObjectStore("owner", { keyPath: "_id" });
//       db.createObjectStore("projects", { keyPath: "_id" });
//       db.createObjectStore("testimonials", { keyPath: "_id" });
//       db.createObjectStore("images", { keyPath: "_id" });
//     };

//     // handles any connection errors
//     request.onerror = function (e) {
//       console.log("There was an error");
//     };

//     // on successful database open
//     request.onsuccess = function (e) {
//       // saves db reference to `db` variable
//       db = request.result;
//       // opens tx to whatever's passed into `storeName` (must match one of the object store names)
//       tx = db.transaction(storeName, "readwrite");
//       // saves reference to that object store
//       store = tx.objectStore(storeName);

//       // reports any errors
//       db.onerror = function (e) {
//         console.log("error", e);
//       };

//       // checks the value of 'method' and acts accordingly
//       switch (method) {
//         // overwrites any object data with matching '_id' value or adding it if not present and returns to wherever idbPromise is called
//         case "put":
//           store.put(object);
//           resolve(object);
//           break;
//         // returns all store data to wherever idbPromise is called
//         case "get":
//           const all = store.getAll();
//           all.onsuccess = function () {
//             resolve(all.result);
//           };
//           break;
//         // will remove item from object store; enables removal when offline
//         case "delete":
//           store.delete(object._id);
//           break;
//         default:
//           console.log("No valid method");
//           break;
//       }

//       // when the transaction is complete, close the connection
//       tx.oncomplete = function () {
//         db.close();
//       };
//     };
//   });
// }

// window.addEventListener('online', idbPromise)
