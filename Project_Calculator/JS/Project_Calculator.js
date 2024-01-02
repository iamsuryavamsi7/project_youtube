

        let count = localStorage.getItem(`count`) ||``;

        document.querySelector(`.class1`)
                .innerHTML = count;

        function calculate(value){

            count += value;

            document.querySelector(`.class1`)
                .innerHTML = count;

            localStorage.setItem(`count`, count)

        }

        function equalsumbol(){

            count  =  String(eval(count));

            document.querySelector(`.class1`)
                .innerHTML = count;

            localStorage.setItem(`count`, count)

        }

        function clearFunction(){

            count = ``;

            document.querySelector(`.class1`)
                .innerHTML = count;

            localStorage.setItem(`count`, count)

        }