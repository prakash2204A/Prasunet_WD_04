<script>
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);

            fetch('/submit-fetch', {
                method: 'POST',
                body: formData
            }).then(response => {
                if (response.ok) {
                    window.location.href = 'thank-you.html';
                } else {
                    alert('There was a problem with your submission. Please try again.');
                }
            }).catch(error => {
                console.error('Error:', error);
                alert('There was a problem with your submission. Please try again.');
            });
        });
    </script>