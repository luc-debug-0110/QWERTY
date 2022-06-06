const form = document.getElementById('form')
        const username = document.getElementById('username')
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        const password2 = document.getElementById('password2')

        form.addEventListener('submit', (e)=>{
            e.preventDefault()
            
            validateInputs()
        });

        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error')
        }
        const validateInputs = () =>{
            const usenameValue = usename.value.trim();
            const emailValue = email.value.trim();
            const passwordVal = email.value.trim();
            const password2Val = email.value.trim();

            if (usernameValue === ''){
                
            }

            /* NÃO TÁ COMPLETO */
   
        };