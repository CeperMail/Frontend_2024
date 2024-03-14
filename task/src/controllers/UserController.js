/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../models/users";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
const formatUser = (title) => {
    return new Promise((resolve, reject) => {
        const formattedUsers = users.map(({ name, age, major }) => ({
            name: `${title} ${name}`,
            age,
            major
        }));
        setTimeout(()=> resolve(formattedUsers), 3000);
    });
};



/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (name) => {
    return new Promise((resolve, reject) => {
        const foundUser = users.find((user) => {
            if (user.name === name) {
                setTimeout(()=> resolve(user),  2000);
                return true; // Return true jika ada user yang cocok
            }
            return false; // Jika tidak
        });
    })
};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = (major) => {
    return new Promise((resolve, reject) => {
        const filteredUsers = users.filter((user) => {
            if  (user.major === major){
                setTimeout(()=> resolve(filteredUsers), 4000);
                return true; // Return true jika ada user yang cocok
            }
            return false; // Jika tidak
        })
    }) 
};

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
export {
    formatUser,
    findByName,
    filterByMajor
}
