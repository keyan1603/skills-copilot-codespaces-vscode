function skillsMember() {
  var member = document.getElementById("member");
  member.innerHTML = "";
  var member = document.getElementById("member");
  var skills = document.createElement("div");
  skills.setAttribute("id", "skills");
  member.appendChild(skills);
  var skills = document.getElementById("skills");

  var skillsTitle = document.createElement("h2");
  skillsTitle.setAttribute("id", "skillsTitle");
  skillsTitle.innerHTML = "Skills";
  skills.appendChild(skillsTitle);

  var skillsList = document.createElement("ul");
  skillsList.setAttribute("id", "skillsList");
  skills.appendChild(skillsList);
  var skillsList = document.getElementById("skillsList");

  var skillsArray = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Git",
    "GitHub",
    "Heroku",
    "Netlify",
    "VS Code",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Audition",
    "Microsoft Office",
    "Google Suite",
    "Slack",
    "Discord",
    "Trello",
    "Jira",
    "Asana",
    "Monday.com",
    "WordPress",
    "Wix",
    "Squarespace",
    "Shopify",
    "Mailchimp",
    "Constant Contact",
    "HubSpot",
    "Google Analytics",
    "Google Tag Manager",
    "Google Ads",
    "Facebook Ads",
    "LinkedIn Ads",
    "Twitter Ads",
    "Pinterest Ads",
    "Instagram Ads",
    "TikTok Ads",
    "Snapchat Ads",
    "YouTube Ads",
    "SEO",
    "SEM",
    "SMM",
    "Email Marketing",
    "Content Marketing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "Growth Hacking",
    "UX/UI Design",
    "Web Design",
    "Graphic Design",
    "Video Editing",
    "Audio Editing",
    "Photography",
    "Videography",
    "Copywriting",
    "Content Writing",
    "Blogging",
    "Podcasting",
    "Public Speaking",
    "Event Planning",
    "Project Management",
    "Product Management",
    "Business Development",
    "Sales",
    "Customer Service",
    "Customer Success",
    "Account Management",
    "Accounting",
    "Finance",
    "Legal",
    "Human Resources",
    "Recruiting",
    "Training",
    "Coaching",
    "Mentoring"]}