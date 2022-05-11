import React from "react";
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <Input
                type="text"
                placeholder="search..."
                value={filter.search}
                onChange={(e) =>
                    setFilter({ ...filter, search: e.target.value })
                }
            />

            <div>
                <Select
                    defaultValue="Sort by:"
                    value={filter.sort}
                    onChange={(selectedSort) =>
                        setFilter({ ...filter, sort: selectedSort })
                    }
                    options={[
                        {
                            value: "title",
                            name: "by title",
                        },
                        {
                            value: "desc",
                            name: "by description",
                        },
                    ]}
                />
            </div>
        </div>
    );
};

export default PostFilter;
