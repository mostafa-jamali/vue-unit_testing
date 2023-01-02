const fetchData = new Promise((resolve) => {
    setTimeout(() => {
        const data = 'peanut butter';
        resolve(data);
    }, 1000);
});

describe('[TEST 1] Promises:', () => {
    test('the data is peanut butter', () => {
        return fetchData.then(data => {
            expect(data).toBe('peanut butter');
        });
    });
});