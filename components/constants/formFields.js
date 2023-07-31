const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"First Name",
        labelFor:"firstName",
        id:"firstName",
        name:"firstName",
        type:"text",
        autoComplete:"firstName",
        isRequired:true,
        placeholder:"First Name" ,
        className:" w-1/2"  
    },
    {
        labelText:"Last Name",
        labelFor:"lastName",
        id:"lastName",
        name:"lastName",
        type:"text",
        autoComplete:"lastName",
        isRequired:true,
        placeholder:"Last Name"  ,
        className:" w-1/2"   
    },
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username" ,
        className:" w-full"    
    },
    {
        labelText:"Email address",
        labelFor:"email",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"  ,
        className:" w-full"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   ,
        className:" w-full"  
    }
]

export {loginFields,signupFields}