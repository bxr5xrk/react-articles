import React from "react";
import PostFilter from "./PostFilter";
import Button from "./UI/button/Button";

const CreateAndFilter = ({ setModal, filter, setFilter }) => {
    return (
        <div className="create-and-filter">
            <Button onClick={() => setModal(true)}>Create post</Button>

            <PostFilter filter={filter} setFilter={setFilter} />
        </div>
    );
};

export default CreateAndFilter;
