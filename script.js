/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    /* 
        Form processing for modals 1 through 3
        This section of the code was completed by Nataly Mota with the help of a tutorial from JavaScriptTutorial.net, as well as from several interactive and video-based tutorials from a module in Khan Academy's Intro to Programming course, which covers DOM Manipulation with JavaScript. 
    */
    var submit1 = document.getElementById('submit-anchor');
    var submit2 = document.getElementById('submit-anchor2');
    var submit3 = document.getElementById('submit-anchor3');    

    function onSubmitBtn1 (e) {
        e.preventDefault();
        
        var radioButtons = document.querySelectorAll("input[name='order_product1']");     
        let selectedValue;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
        if (selectedValue === 'yes' || selectedValue === 'no') {
            alert('Button clicked and selected value is ' + selectedValue);
        } else {
            alert('Button clicked, but no value was selected.')
        }
            
    }

    function onSubmitBtn2 (e) {
        e.preventDefault();
        
        var radioButtons = document.querySelectorAll("input[name='order_product2']");     
        let selectedValue;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
        if (selectedValue === 'yes' || selectedValue === 'no') {
            alert('Button clicked and selected value is ' + selectedValue);
        } else {
            alert('Button clicked, but no value was selected.')
        }
            
    }

    function onSubmitBtn3 (e) {
        e.preventDefault();
        
        var radioButtons = document.querySelectorAll("input[name='order_product2']");     
        let selectedValue;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedValue = radioButton.value;
                break;
            }
        }
        if (selectedValue === 'yes' || selectedValue === 'no') {
            alert('Button clicked and selected value is ' + selectedValue);
        } else {
            alert('Button clicked, but no value was selected.')
        }
            
    }
    
    submit1.addEventListener('click', onSubmitBtn1);
    submit2.addEventListener('click', onSubmitBtn2);
    submit3.addEventListener('click', onSubmitBtn3);
});

