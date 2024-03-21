const addUniqueObjects = (data) => {
    const uniqueTypes = {};
    const result = [];

    data.forEach(item => {
        if (!uniqueTypes[item.Type]) {
            uniqueTypes[item.Type] = true;
            result.push(item);
        }
    });

    return result;
};

const DataBase = [
    { id: 1, Type: 'Type1' },
    { id: 2, Type: 'Type1' },
    { id: 3, Type: 'Type1' },
    { id: 4, Type: 'Type2' },
    { id: 5, Type: 'Type2' },
    { id: 6, Type: 'Type3' },
    { id: 7, Type: 'Type3' },
    { id: 8, Type: 'Type4' },
    { id: 9, Type: 'Type4' },
    { id: 10, Type: 'Type4' },
    { id: 11, Type: 'Type3' },
];

const uniqueObjects = addUniqueObjects(DataBase);
console.log(uniqueObjects);
