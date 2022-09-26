import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser'
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_dq5msob',
            'template_xiqyzgt',
            form.current,
            'fOVYlfTRNRrIph3BC',
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
        

    return (
        <div>
            <Typography mt={10} variant="h5">
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            Contact
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>
                        <form ref={form} onSubmit={sendEmail}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField placeholder="Enter Full Name" label="Full Name" id="from_name" name="from_name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="email" name="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Message" id="message" name="message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
            
                    </CardContent>
                </Card>
            </Grid>
            </Typography>
        </div>

    );
}

export default Contact;