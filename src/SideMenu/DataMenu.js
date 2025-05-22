

const DataMenu = [
    {
        label:"Home",
        to:"/",
    },
    {
        label:"Profile",
        to:"/Profile",
        children:[
            {
        label:"Details",
        to:"Details",
        children:[
            {
        label:"Location",
        to:"/location",
                
            },
        ],

            },
        ],
    },

    {
        label:"Settings",
        to:"/Settings",
        children:[
            {
        label:"Account",
        to:"account",
            },
            {
                label:"Security",
                to:"security",
                children:[
                    {
                label:"Login",
                to:"login",
                    },
                    {
                        label:"Register",
                        to:"register",
                            },
                ],
            },

            
            
        ],
    },
]

export default DataMenu;