import React from "react";
import {Container} from "../Grid";
import SendMessage from "./SendMessage";

function RequestResume() {
    return (
        <Container>
            <div className="card">
                <div className="card-body">
                    <form action="/api/contacts" method="get">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="button" className="btn" value="Request Resume"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export {SendMessage, RequestResume};