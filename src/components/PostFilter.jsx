import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div className="search-sort">
            <Input
                type="text"
                placeholder="search..."
                value={filter.search}
                onChange={(e) =>
                    setFilter({ ...filter, search: e.target.value })
                }
            />

            <p className="sort-by">Sort by: </p>

            <Select
                defaultValue="numbering"
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                options={[
                    {
                        value: "title",
                        name: "title",
                    },
                    {
                        value: "body",
                        name: "description",
                    },
                ]}
            />

        </div>
    );
};

export default PostFilter;
