"use strict";

const resourcesLink = document.querySelector('#resources-link');
const resourcesSection = document.querySelector('.resources');
const toursLink = document.querySelector('#tours-link');
const toursSection = document.querySelector('.hiking-tour');
const classesLink = document.querySelector('#classes-link');
const classesSection = document.querySelector('.basic-classes');
const contactsLink = document.querySelector('#contacts-link');
const contactsSection = document.querySelector('.page-footer');

function scrollPage(link, section) {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    section.scrollIntoView({behavior: "smooth"});
  });
};

scrollPage(resourcesLink, resourcesSection);
scrollPage(toursLink, toursSection);
scrollPage(classesLink, classesSection);
scrollPage(contactsLink, contactsSection);
