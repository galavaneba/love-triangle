/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let index1, index1love, index2, index2love, index3, index3love,
        triangle = 0,
        length = preferences.length;

    for(let i = 0; i <= length; i++) {

        index1 = i;
        index1love = preferences[i] - 1;

        index2 = index1love;
        index2love = preferences[index1love] - 1;

        index3 = index2love;
        index3love = preferences[index2love] - 1;

        if (index1 === index3love && index1 !== index1love) {
            triangle++
        }
    }

    return triangle/3;
};
