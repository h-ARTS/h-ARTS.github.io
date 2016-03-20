var bio = { 
			"bio":
            [
             {
                "name":"Hanan Mufti",
                "role":"Student in Udacity & KV Businessschool",
                "contacts": {
                    "mobile":"+41 76 420 42 82",
                    "email":"pak2008@hotmail.de",
                    "github": "h-ARTS",
                    "twitter":"none",
                    "location": "Zürich, Schwamendingen"
                },

                "welcomeMessage":"Welcome to my java scripted homepage OMG!",
                "skills":[
                "helpful", "programming", "playing", "reading", "shopping"
                ],
                "bioPic":"images/fry.jpg"
             }
            ]
		}

var education = {
    			"schools": [
    			{
        			"name": "KV Businessschool",
        			"location": "Zurich, Escher-Wyss-Platz",
        			"degree": "edupool.ch",
        			"majors": ["HSV"],
        			"dates": 2015,
        			"url": "http://www.kvz-weiterbildung.ch"
    			},
    			{
        			"name": "SVBL-School",
        			"location": "Zürich, Dietikon",
        			"degree": "Logistician-EFZ",
        			"majors": ["EFZ"],
        			"dates": 2013,
        			"url": "http://www.svbl.ch"
    			}
 				],
 				"onlineCourses": [
 					{
 						"title": "Intro HTML and CSS",
 						"school": "Udacity",
 						"date": "March 2015",
 						"url": "http://www.udacity.com"
 					}
 				]
}

var work = { 
                "jobs": [
                  {
                    "employer": "JCL-Logistics (BMW-Group + MINI)",
                    "title": "Logistician",
                    "location": "Zürich, Otelfingen",
                    "dates": "10.02.2014 - 29.02.2014",
                    "descripton": "Working in Warehouse with BMW spareparts and MINI ofcourse too Wasn't too interesting because days were going too long. But i enjoyed by looking at the cars again and again. I know that sounds weird.... :O"
                  }, 
                  {
                    "employer": "Hilti",
                    "title": "Logistician",
                    "location": "Zürich, Adliswil",
                    "dates": "13.05.2014 - 26.06.2014",
                    "descripton": "Enjoyed a lot with some new friends. Summer and hot it wasn't that easy but at least cool people ;)"
                  },
                  {
                    "employer": "Lindab Inc.",
                    "title": "Logistician",
                    "location": "Zürich, Otelfingen-Golfpark",
                    "dates": "25.10.2014 - 2.12.2014",
                    "descripton": "Finally driving forklifts i missed them a lot! Were really cool times and again had enough fun! Sometimes complication happend but it wasn't too serious thank God!"
                  }
                ]
}

var projects = { 
                "projects": [
                  {
                    "title": "Sample Project 1",
                    "dates": "2014",
                    "descripton":"Project about cats....They are really cute!",
                    "images":[
                    "http://placekitten.com/g/500/280",
                    "http://placekitten.com/g/500/280"
                    ]
                  } 
                ]
}

bio.display = function() {
	for (biodata in bio.bio) {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.bio[biodata].role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.bio[biodata].name));

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.bio[biodata].contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.bio[biodata].contacts.email));        
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.bio[biodata].contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.bio[biodata].contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.bio[biodata].contacts.location));

        $("#footerContacts").append(HTMLmobile.replace("%data%", bio.bio[biodata].contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.bio[biodata].contacts.email));        
        $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.bio[biodata].contacts.twitter));
        $("#footerContacts").append(HTMLgithub.replace("%data%", bio.bio[biodata].contacts.github));
        $("#footerContacts").append(HTMLlocation.replace("%data%", bio.bio[biodata].contacts.location));
        
		$("#header").append(HTMLbioPic.replace("%data%", bio.bio[biodata].bioPic));
        $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.bio[biodata].welcomeMessage));       
        $("#header").append(HTMLskillsStart);

        var formattedSkills = HTMLskills.replace("%data%", bio.bio[biodata].skills[0]) +
        					  HTMLskills.replace("%data%", bio.bio[biodata].skills[1]) +
        					  HTMLskills.replace("%data%", bio.bio[biodata].skills[2]) +
        					  HTMLskills.replace("%data%", bio.bio[biodata].skills[3]) +
        					  HTMLskills.replace("%data%", bio.bio[biodata].skills[4]);
        $("#header").append(formattedSkills);
    }
}
bio.display();


work.display = function() {

	for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].descripton);
        var formattedDatas = formattedDates + formattedLocation + formattedDescription;

        $(".work-entry:last").append(formattedDatas);$

	}
}
work.display();

projects.display = function() {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].descripton);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

education.display = function() {
	for (educations in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[educations].majors);
		$(".education-entry:last").prepend(formattedMajor);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educations].location);
		$(".education-entry:last").prepend(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[educations].dates);
		$(".education-entry:last").prepend(formattedDates);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[educations].name) + 
							HTMLschoolDegree.replace("%data%", education.schools[educations].degree);
		$(".education-entry:last").prepend(formattedName);
	}

	for (educations in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		$(".paddingleft").css("padding-left", "0px");

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[educations].title) +
							 HTMLonlineSchool.replace("%data%", education.onlineCourses[educations].school);
		$(".education-entry:last").append(formattedTitle);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[educations].date);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[educations].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() +
        name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);