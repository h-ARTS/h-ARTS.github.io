var bio = { 
			"bio":
            [
             {
                "name":"Hanan Mufti",
                "role":"Currently searching for new oppertunities",
                "contacts": {
                    "mobile":"+41 76 420 42 82",
                    "email":"pak2008@hotmail.de",
                    "github": "h-ARTS",
                    "twitter":"none",
                    "location": "Zürich, Schwamendingen"
                },

                "welcomeMessage":"Welcome everyone, my name is Hanan and I'm Front-End Web Developer",
                "skills":[
                "HTML", "CSS", "JavaScript", "jQuery", "Knockout.js", "AngularJS", "WordPress", "Adobe Photoshop", "UX", "Microsoft Office Suite"
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
                        "majors": ["Foundation Degree"],
                        "dates": "Febraury 2015 - June 2015",
                        "url": "http://www.kvz-weiterbildung.ch"
                    },
                    {
                        "name": "SVBL-School",
                        "location": "Zürich, Dietikon",
                        "degree": "Logistician-EFZ",
                        "majors": ["EFZ"],
                        "dates": "August 2010 - July 2013",
                        "url": "http://www.svbl.ch"
                    }
 				],
 				"onlineCourses": [
 					{
 						"school": "Udacity",
                        "title": "Front-End Developer Nanodegree",
 						"date": "March - April 2015",
 						"url": "http://www.udacity.com"
 					},
                    {
                        "school": "FreeCodeCamp",
                        "title": "Full-Stack Web Developer",
                        "date": "October 2015 - present",
                        "url": "https://www.freecodecamp.com"
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
                    "descripton": ""
                  }, 
                  {
                    "employer": "Hilti",
                    "title": "Logistician",
                    "location": "Zürich, Adliswil",
                    "dates": "13.05.2014 - 26.06.2014",
                    "descripton": ""
                  },
                  {
                    "employer": "Lindab Inc.",
                    "title": "Logistician",
                    "location": "Zürich, Otelfingen-Golfpark",
                    "dates": "25.10.2014 - 2.12.2014",
                    "descripton": ""
                  }
                ]
}

var projects = { 
                "projects": [
                  {
                    "title": "Build a Portfolio Site",
                    "dates": "2015",
                    "descripton":"This was the first Project in the Nanodegree program. All that I had to do is to build a simple portfolio web page with HTML and CSS. In this project, I used Bootstrap framework to make the site responsive.",
                    "images":[
                    "http://h-arts.github.io/p1/p1.JPG"
                    ]
                  },
                  {
                    "title": "Interactive Resume",
                    "dates": "2015",
                    "descripton":"Click to edit project descriptionIn this project, my resume content was in a JSON file. From there I used Javascript and jQuery to display my content dynamically on the page.",
                    "images":[
                    "http://h-arts.github.io/p2/p2.JPG"
                    ]
                  }, 
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
        					  HTMLskills.replace("%data%", bio.bio[biodata].skills[4]) +
                              HTMLskills.replace("%data%", bio.bio[biodata].skills[5]) +
                              HTMLskills.replace("%data%", bio.bio[biodata].skills[6]) +
                              HTMLskills.replace("%data%", bio.bio[biodata].skills[7]) +
                              HTMLskills.replace("%data%", bio.bio[biodata].skills[8]) +
                              HTMLskills.replace("%data%", bio.bio[biodata].skills[9]);
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
    
    $(".education-entry:last").append(HTMLonlineClasses);
    
	for (educations in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
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