import React, {Component} from "react";


class Testimonials extends Component {
    render() {
        let testimonials = this.props.testimonials;
        if (testimonials.length > 0) {
            return (
                <div className="prdtestimonials">
                    {testimonials.map(function (testimonial) {
                        return (
                            <div className="prdtestimonial" key={testimonial.id}>
                                <h4>{testimonial.title}</h4>
                                <p>{testimonial.text}</p>
                            </div>
                        )
                    })}
                </div>
            );
        } else {
            return (
                <div>
                    Be the first one to write a testimonial.
                </div>
            );
        }
    }
}

export default Testimonials;
