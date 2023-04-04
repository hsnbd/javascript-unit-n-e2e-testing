const LruCache = require('./lru-cache');

describe('LruCache', () => {
    let lruCache;

    beforeEach(() => {
        lruCache = new LruCache(3);
    });

    test('set and get', () => {
        lruCache.set('key1', 'value1');
        lruCache.set('key2', 'value2');
        lruCache.set('key3', 'value3');

        expect(lruCache.get('key1')).toBe('value1');

        lruCache.set('key4', 'value4');

        expect(lruCache.get('key2')).toBe(undefined);
        expect(lruCache.get('key3')).toBe('value3');
        expect(lruCache.get('key4')).toBe('value4');
    });

    test('capacity', () => {
        lruCache.set('key1', 'value1');
        lruCache.set('key2', 'value2');
        lruCache.set('key3', 'value3');
        lruCache.set('key4', 'value4');
        lruCache.set('key5', 'value5');

        expect(lruCache.get('key1')).toBe(undefined);
        expect(lruCache.get('key2')).toBe(undefined);
        expect(lruCache.get('key3')).toBe('value3');
        expect(lruCache.get('key4')).toBe('value4');
        expect(lruCache.get('key5')).toBe('value5');
    });
});
