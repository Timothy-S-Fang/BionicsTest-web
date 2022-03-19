import emailjs from 'emailjs-com'
import { Layout } from "./Layout"
const keys = require('../keys')

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(keys.serviceID, keys.templateID, e.target, keys.userID).then(res=>{
            console.log(res);
        }).catch(err=>console.log(err))
    }

    return (
        <Layout>
            <div class="row">
        <section class="mb-4">

            <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div class="row">

                <div class="col-md-12 mb-md-0 mb-5">
                    <form name="contact-form" onSubmit ={sendEmail}>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="name" name="name" class="form-control"/>
                                    <label for="name" class="">Your name</label>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control"/>
                                    <label for="email" class="">Your email</label>
                                </div>
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                    <label for="subject" class="">Subject</label>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-12">

                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    <label for="message">Your message</label>
                                </div>

                            </div>
                        </div>

                        <input type="submit"
                                value="send"
                                className="form-control btn btn-primary"
                                style={{ marginTop: "30px"}} />
                    </form>
                </div>

                

            </div>
        </section>
        </div>
        <div class="row">
            <section>
            <h2 class="title">APPLICATION FAQs</h2>

            <div class = "faq">
                <div class = "questions">
                    <h3>When can I apply?</h3>
                    <svg width="15" height="65" viewBox= "0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                </div>
            <div class = "answers">
                <p>
                    The best time to apply is during our recruitment season, which occurs at the start of every winter session semester at the end of August! However, our email inbox remains open throughout the year.
                </p>
            </div>
        </div>

            <div class = "faq">
                <div class = "questions">
                    <h3>Will I be considered if I do not have prior experience being on a design team?</h3>
                    <svg width="20" height="100" viewBox= "0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                </div>
            <div class = "answers">
                <p>
                    Yes! We encourage all candidates interested in joining the team to send in an application, regardless of what your experience may include. We are ultimately looking for those who are willing to dedicate the time and energy to learn and further the goals of our team.
                </p>
            </div>
        </div>

            <div class = "faq">
                <div class = "questions">
                    <h3>What sub-team should I apply for?</h3>
                    <svg width="15" height="65" viewBox= "0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                </div>
            <div class = "answers">
                <p>
                    The final choice that you list on your application is up to you! All we ask is that you have an idea of which sub-team(s) aligns best with your own interests or studies, to better help us decide what the best fit is for you.
                </p>
            </div>
        </div>


            <div class = "faq">
                <div class = "questions">
                    <h3>How do I join the research team?</h3>
                    <svg width="15" height="65" viewBox= "0 0 42 25">
                        <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                </div>
            <div class = "answers">
                <p>
                    The research team is a new addition to our team as a whole, and requires membership on one of our sub-teams to be eligible for consideration. Recommendation from your sub-team lead is also required to apply for a position on the research team. All applications will be reviewed by the executive team and the professor/graduate student in charge.
                </p>
            </div>
        </div>

        </section>
        </div>
        </Layout>
    )
}
