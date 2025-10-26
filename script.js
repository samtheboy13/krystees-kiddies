 function showSubjects(level) {
            // Hide all subject lists first
            document.getElementById('elementary-subjects').style.display = 'none';
            document.getElementById('secondary-subjects').style.display = 'none';
            document.getElementById('tertiary-subjects').style.display = 'none';
            document.getElementById('other-subjects').style.display = 'none';

            // Show the selected subject list
            document.getElementById(level + '-subjects').style.display = 'block';

            // Scroll to the subject list
            document.getElementById(level + '-subjects').scrollIntoView({
                behavior: 'smooth'
            });
        }

        function startTest(subject) {
            alert('Starting ' + subject + ' test (100)\nPlease message 08051337668 This would launch the test interface in a complete application.');
            // In a full implementation, this would redirect to the test page
        }