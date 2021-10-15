const Food = [
    {
        "_id": "1",
        "picture": "https://i.ibb.co/TPjCBYc/breakfast1.png",
        "category": "breakfast",
        "price": 6.99,
        "name": "Bagel and Cream Cheese",
        "about": "Voluptate qui proident est pariatur eu excepteur in dolor aute ea anim. Veniam et anim dolor esse do ad pariatur elit aliqua amet ut. Ex tempor consequat nisi esse ut fugiat anim. Aliqua minim non labore cupidatat esse ea quis ea officia ipsum non cupidatat aute.\r\n"
    },
    {
        "_id": "2",
        "picture": "https://i.ibb.co/y8L91vM/breakfast2.png",
        "category": "breakfast",
        "price": 9.99,
        "name": "Breakfast Sandwich",
        "about": "Quis ad dolore minim pariatur reprehenderit magna dolore ex deserunt Lorem laborum voluptate. Mollit qui reprehenderit dolore aliqua veniam fugiat occaecat in exercitation eu do. Cupidatat irure proident amet mollit Lorem minim dolore et. Aliquip elit do proident non adipisicing amet culpa aute quis nisi mollit consectetur quis. Magna nisi eu aliquip veniam esse nisi id. Sunt adipisicing qui pariatur sunt est occaecat ea velit culpa occaecat amet.\r\n"
    },
    {
        "_id": "3",
        "picture": "https://i.ibb.co/QkQbrhq/breakfast3.png",
        "category": "breakfast",
        "price": 10.99,
        "name": "Baked Chiken",
        "about": "Tempor mollit nulla non ad veniam aliqua laborum fugiat. Enim aliqua incididunt aute fugiat voluptate qui. Lorem nulla proident elit ipsum ad aliqua fugiat non quis et nostrud. Aliqua cillum excepteur consequat sunt reprehenderit ad. Veniam ex excepteur Lorem eu deserunt reprehenderit duis aliqua culpa sit et dolore voluptate consequat. Ipsum nulla consequat id incididunt laborum commodo aliqua est sunt cupidatat Lorem non. Aliqua qui ea ad proident labore ex pariatur fugiat irure minim.\r\n"
    },
    {
        "_id": "4",
        "picture": "https://i.ibb.co/1fdFWDL/breakfast4.png",
        "category": "breakfast",
        "price": 8.99,
        "name": "Eggs Benedict",
        "about": "Cupidatat exercitation velit consectetur commodo labore et reprehenderit nostrud ex veniam pariatur. Qui ullamco officia enim elit commodo Lorem voluptate laborum. In amet veniam commodo officia non sint labore excepteur elit tempor.\r\n"
    },
    {
        "_id": "5",
        "picture": "https://i.ibb.co/L9B9xzp/breakfast5.png",
        "category": "breakfast",
        "price": 19.99,
        "name": "Toast Croissant Fried Egg",
        "about": "Commodo culpa labore incididunt exercitation magna Lorem aliqua fugiat ex ipsum. Amet ea sit eu sint sint aliquip quis tempor. Sint excepteur sint ipsum eiusmod. In cupidatat do eu dolore qui exercitation sit magna nostrud nulla anim. Ipsum fugiat Lorem elit veniam ea et sit occaecat laborum fugiat nisi. Voluptate excepteur enim pariatur amet aliqua magna eiusmod anim ex nisi.\r\n"
    },
    {
        "_id": "6",
        "picture": "https://i.ibb.co/xjg1pzY/breakfast6.png",
        "category": "breakfast",
        "price": 3.99,
        "name": "Fried Egg Toast",
        "about": "Cillum ex voluptate deserunt ad enim reprehenderit irure do laborum reprehenderit ad magna. Eiusmod minim adipisicing enim est minim commodo nostrud consectetur. Tempor commodo ullamco ullamco aute fugiat enim veniam labore commodo anim ea sint. Voluptate et nostrud excepteur pariatur excepteur minim occaecat.\r\n"
    },
    {
        "_id": "7",
        "picture": "https://i.ibb.co/PD3DvRf/lunch1.png",
        "category": "lunch",
        "price": 22.99,
        "name": "Healthy Meal Plan",
        "about": "Id dolore officia velit eu qui ea deserunt non cillum pariatur et. Magna ea ut exercitation id anim eiusmod aliqua. Anim ea occaecat ex magna ipsum sit voluptate exercitation voluptate. Nostrud pariatur cupidatat minim excepteur non sint qui reprehenderit velit. Consectetur nostrud mollit in consectetur deserunt magna nostrud in enim nulla ullamco.\r\n"
    },
    {
        "_id": "8",
        "picture": "https://i.ibb.co/xJyVxkT/lunch2.png ",
        "category": "lunch",
        "price": 9.99,
        "name": "Fried Chicken Bento",
        "about": "Dolor exercitation consequat deserunt nulla et mollit occaecat incididunt mollit est tempor aliquip consectetur. Reprehenderit adipisicing ut do mollit sit ex nostrud id id ullamco. Quis quis laboris sunt do voluptate non deserunt aliquip. Aliqua excepteur consectetur ex officia exercitation qui tempor et qui amet. Id cillum commodo quis voluptate anim. Consectetur laboris nostrud nostrud minim ea consequat adipisicing eu laboris nostrud irure consequat ipsum dolore.\r\n"
    },
    {
        "_id": "9",
        "picture": "https://i.ibb.co/PMJZX5r/lunch3.png",
        "category": "lunch",
        "price": 6.99,
        "name": "Tarragon Rubbed Salmon",
        "about": "Cillum sunt quis aliqua do ullamco veniam do do in voluptate non laboris. Incididunt exercitation qui sunt dolore incididunt. Nulla aliquip nostrud amet adipisicing mollit proident qui esse reprehenderit ullamco. Incididunt magna non ea exercitation occaecat. Exercitation dolore irure elit quis in tempor ut duis occaecat velit. Irure amet qui ut dolore velit fugiat aliquip adipisicing duis aute eiusmod pariatur mollit aliquip. Culpa non reprehenderit excepteur aliquip ipsum.\r\n"
    },
    {
        "_id": "10",
        "picture": "https://i.ibb.co/zPP70Q6/lunch4.png",
        "category": "lunch",
        "price": 8.99,
        "name": "Inidian Lunch",
        "about": "Qui ut occaecat Lorem Lorem culpa ea est incididunt duis consequat et nisi exercitation. Do elit proident amet cillum esse ex sunt. Sunt ullamco ea eu laborum irure nulla consequat officia amet do ea adipisicing ea. Voluptate minim eiusmod excepteur fugiat quis incididunt ea officia magna aliquip Lorem. Lorem veniam duis esse consectetur culpa deserunt. Aute dolor adipisicing sint sunt est ipsum ut sint culpa ullamco reprehenderit Lorem veniam.\r\n"
    },
    {
        "_id": "11",
        "picture": "https://i.ibb.co/xGVcV16/lunch5.png",
        "category": "lunch",
        "price": 15.99,
        "name": "Beef Steak",
        "about": "Commodo minim nulla laborum exercitation. Pariatur dolor culpa mollit duis reprehenderit aliqua anim proident. Velit occaecat aliqua pariatur sint dolore amet adipisicing commodo consequat incididunt labore. Laborum laborum esse cupidatat eu adipisicing id esse nostrud nostrud. Dolore excepteur et ad anim laboris esse occaecat est veniam minim excepteur. Sunt amet veniam occaecat nisi aliqua nisi eu.\r\n"
    },
    {
        "_id": "12",
        "picture": "https://i.ibb.co/XFpmTWb/lunch6.png",
        "category": "lunch",
        "price": 7.99,
        "name": "Honey Soy Glzed Salmon",
        "about": "Eiusmod esse aliquip in est nisi irure qui. Irure aliquip id ipsum esse enim. Irure cupidatat sint eu nisi adipisicing occaecat elit adipisicing commodo fugiat.\r\n"
    },
    {
        "_id": "13",
        "picture": "https://i.ibb.co/n6MXcZM/dinner1.png",
        "category": "dinner",
        "price": 9.99,
        "name": "Salmon With Grape Salad",
        "about": "Consectetur laborum aliquip proident laborum consectetur minim minim aliqua ea fugiat culpa mollit. Pariatur eu sint veniam incididunt quis eu Lorem nulla. Pariatur enim officia incididunt cupidatat excepteur consequat. Occaecat proident nulla deserunt ex consequat aute sint anim eu reprehenderit esse proident adipisicing. Amet aliquip aute ut et velit eu commodo veniam sint enim.\r\n"
    },
    {
        "_id": "14",
        "picture": "https://i.ibb.co/tcHmXbb/dinner2.png",
        "category": "dinner",
        "price": 10.99,
        "name": "Lemony Salmon Piccata",
        "about": "Sit dolore tempor veniam duis et adipisicing irure fugiat eiusmod amet reprehenderit magna. Qui est aliqua sint sit ex cupidatat dolor veniam do exercitation pariatur. Amet consequat voluptate nisi dolor sint ea laboris deserunt do quis. Cupidatat veniam veniam eiusmod proident ea occaecat reprehenderit amet ex ea. Excepteur ullamco esse sunt dolor voluptate dolor. Labore voluptate duis esse nisi fugiat occaecat eu non eu esse labore cillum reprehenderit. Occaecat deserunt et ea sit tempor reprehenderit incididunt ullamco Lorem cillum magna commodo eiusmod.\r\n"
    },
    {
        "_id": "15",
        "picture": "https://i.ibb.co/9cYhF8T/dinner3.png",
        "category": "dinner",
        "price": 12.99,
        "name": "Pork TenderLion",
        "about": "Nulla ex incididunt mollit labore occaecat cillum sit incididunt Lorem consequat deserunt ut deserunt. Irure voluptate enim veniam et est ullamco anim qui aliqua. Consectetur incididunt sint sunt mollit.\r\n"
    },
    {
        "_id": "16",
        "picture": "https://i.ibb.co/RNzDjRr/dinner4.png",
        "category": "dinner",
        "price": 8.99,
        "name": "French Fries with Cheese",
        "about": "Minim deserunt commodo tempor ad ex eiusmod elit. Irure exercitation ea ipsum tempor ullamco cillum nulla. Consequat esse deserunt velit elit anim sint nisi nulla officia sunt ut cillum velit.\r\n"
    },
    {
        "_id": "17",
        "picture": "https://i.ibb.co/Cm4NNXv/dinner5.png",
        "category": "dinner",
        "price": 6.99,
        "name": "Garlic Butter Salmon",
        "about": "Cupidatat ad ad officia aliquip dolore excepteur fugiat consequat dolor est adipisicing deserunt. Eiusmod dolor cillum consectetur tempor. Id et ad exercitation ad ut reprehenderit officia. Dolore fugiat non veniam Lorem dolor dolor ad eiusmod non tempor dolore officia Lorem cillum. Sunt enim sit dolor irure magna pariatur exercitation occaecat esse commodo ex consequat. Et esse sunt aliqua mollit non cupidatat minim.\r\n"
    },
    {
        "_id": "18",
        "picture": "https://i.ibb.co/KwYjbng/dinner6.png",
        "category": "dinner",
        "price": 9.99,
        "name": "Baked Chiken",
        "about": "Aliqua culpa veniam magna veniam minim labore reprehenderit dolore pariatur id mollit veniam exercitation fugiat. Cillum aliquip quis pariatur reprehenderit velit nisi cupidatat proident ea dolore exercitation labore culpa laboris. Ex commodo officia tempor enim quis est duis pariatur tempor do exercitation. Duis commodo ea laborum dolore cillum aliqua ex nostrud. Aute pariatur labore reprehenderit laborum.\r\n"
    }
]
export default Food;