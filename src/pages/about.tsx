interface AboutProps {}
const About: React.FC<AboutProps> = ({}) => {
	return (
		<div>
			<div className=" bg-gray-300 whitespace-pre p-2 m-4">
				<code contentEditable>
					{`{
    full-name : "Bensmida Jaber",
    male,
    birth-date:{
        year: 1992,
        month: {
            name: "April",
            id:4
            },
        day: {}
        },
    contacts:{
        social-media:[
            {platform: "YouTube", profile_id: "@jbr"},
            {platform: "Twitter", profile_id: "@jbr"},
            {platform: "Discord", profile_id: "@jbr"},
            {platform: "Facebook", profile_id: "@jbr"},
        ],
        other:[
            {methode: "email", profile_id: "@jbr"},
            {methode: "phone", profile_id: null},
        ]
    }
}`}
				</code>
			</div>
		</div>
	);
};

export default About;
