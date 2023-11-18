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

    /* Form processing for modal 1 */
    var wantsToOrder = "";
    var yesToOrderingProd1 = document.getElementById("y_to_order1");
    var noToOrderingProd1 = document.getElementById("n_to_order1");

    function doWhenYesRadioBtnIsClicked () {
        alert("Yes");
        wantsToOrder = true;
    } 

    function doWhenNoRadioBtnIsClicked() {
        alert("No");
        wantsToOrder = false;
    }

    yesToOrderingProd1.addEventListener('click', doWhenYesRadioBtnIsClicked);
    noToOrderingProd1.addEventListener('click', doWhenNoRadioBtnIsClicked);

    var submit1 = document.getElementById('submit-anchor');
    alert(submit1);
    function onSubmitBtn () {
        //e.preventDefault();
        
        alert('Button clicked!');
        
        /*
        for (var i = 0; i < radioInput.length; i++) {
            var isChecked = radioInput[i].;
            console.log(isChecked);
        }
        */
    }
    submit1.addEventListener('click', onSubmitBtn);



    /* Form processing for modal 2 */
    wantsToOrder = "";
    var yesToOrderingProd2 = document.getElementById("y_to_order2");
    var noToOrderingProd2 = document.getElementById("n_to_order2");

    yesToOrderingProd2.addEventListener('click', doWhenYesRadioBtnIsClicked);
    noToOrderingProd2.addEventListener('click', doWhenNoRadioBtnIsClicked);

    var submit2 = document.getElementById('submit-anchor2');
    submit2.addEventListener('click', onSubmitBtn);



    /* Form processing for modal 3 */
    wantsToOrder = "";
    var yesToOrderingProd2 = document.getElementById("y_to_order3");
    var noToOrderingProd2 = document.getElementById("n_to_order3");

    yesToOrderingProd2.addEventListener('click', doWhenYesRadioBtnIsClicked);
    noToOrderingProd2.addEventListener('click', doWhenNoRadioBtnIsClicked);

    var submit3 = document.getElementById('submit-anchor3');
    submit3.addEventListener('click', onSubmitBtn);
});

