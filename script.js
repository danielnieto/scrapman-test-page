var myViewModel = {
    title: ko.observable('This is the title of the website'),
    items: ["dolphin", "monkey", "snake", "dog", "bee", "elephant", "cat", "horse", "seal"],
    selectedOption: ko.observable(''),
    options: ['uno', 'dos', 'tres', 'tamarindo'],
    template1: {
        title: "This is using a template"
    },
    template2: {
        title: "This also uses the same template but with different text"
    },
};

ko.applyBindings(myViewModel);