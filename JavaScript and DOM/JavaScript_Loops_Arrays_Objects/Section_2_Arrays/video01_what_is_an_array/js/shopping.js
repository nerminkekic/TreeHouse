var items = [
    'apples',
    'milk',
    'bread',
    'cookies',
    true,
    1
];

items.push('New Item');
items.unshift(0);
items.pop(1);
for (var i = 0; i < items.length; i++) {
    console.log(items[i]);
}