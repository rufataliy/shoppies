import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import InputGroup from "react-bootstrap/InputGroup";
import { useRouter } from "next/router";

const defaultValues: SearchParams = {
  s: "",
  type: "",
  year: "",
};

const years = [];

for (let year = 1980; year < 2021; year++) {
  years.push(year);
}

interface Props {
  onSubmit: (params: SearchParams) => void;
}

export const SearchForm: React.FC<Props> = ({ onSubmit }) => {
  const [params, setParams] = useState(defaultValues);
  const [errors, setErrors] = useState({ s: false });
  const { query, push } = useRouter();

  useEffect(() => {
    if (query.s) {
      setParams((params) => ({ ...params, ...query }));
      onSubmit({ ...params, ...query });
    }
  }, [query.s, query.year, query.type]);

  const handleTypeSelection = (type: string) => {
    if (params.type === type) {
      setParams((params) => ({ ...params, type: "" }));
    } else {
      setParams((params) => ({ ...params, type }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Boolean(params.s)) return setErrors({ s: true });
    setErrors({ s: false });
    let queryString = "?";
    const keys = Object.keys(defaultValues);
    keys.forEach((key, index) => {
      if (Boolean(params[key])) {
        queryString += `${index === 0 ? "" : "&"}${key}=${params[key]}`;
      }
    });

    push(queryString);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Accordion defaultActiveKey="0">
        <Form.Group>
          <Form.Label htmlFor="keyword">Search</Form.Label>
          <InputGroup>
            <Form.Control
              name="keyword"
              id="keyword"
              isInvalid={errors.s}
              type="text"
              onChange={(e) => {
                setErrors({ s: false });
                setParams((params) => ({ ...params, s: e.target.value }));
              }}
              value={params.s}
              placeholder="Type a move title . . "
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">
                <Accordion.Toggle eventKey="0">
                  <i className="bi bi-chevron-down"></i>
                </Accordion.Toggle>
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
        <div className="form-dropdown-section">
          <Accordion.Collapse eventKey="0">
            <div className="d-md-flex">
              <Form.Group className="flex-md-grow-1 mr-md-3">
                <Form.Label htmlFor="year">Year</Form.Label>
                <Form.Control
                  value={params.year}
                  onChange={(e) =>
                    setParams((params) => ({ ...params, year: e.target.value }))
                  }
                  name="year"
                  id="year"
                  as="select"
                >
                  <option value="">not selected</option>
                  {years.map((year) => {
                    return <option>{year}</option>;
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group className="flex-grow-1 flex-md-grow-2">
                <Form.Label htmlFor="type">Type</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    className="p-0 mr-md-3 mr-1 flex-grow-1"
                    id="type"
                    type="radio"
                  >
                    <Form.Label
                      className={`d-flex justify-content-center align-items-center btn btn-block btn-${
                        params.type === "movies" ? "" : "outline-"
                      }primary`}
                      htmlFor="type-movies"
                    >
                      Movies <i className="bi bi-film mt-n1 ml-2 d-block"></i>
                    </Form.Label>
                    <Form.Check.Input
                      onChange={(e) => handleTypeSelection(e.target.value)}
                      hidden
                      value="movies"
                      id="type-movies"
                      type="checkbox"
                      checked={params.type === "movies"}
                    />
                  </Form.Check>
                  <Form.Check
                    className="p-0 mr-md-3 mr-1 flex-grow-1"
                    id="type-movies"
                    type="radio"
                  >
                    <Form.Label
                      className={`d-flex justify-content-center align-items-center btn btn-block btn-${
                        params.type === "series" ? "" : "outline-"
                      }primary`}
                      htmlFor="type-series"
                    >
                      Series <i className="bi bi-files mt-n1 ml-2 d-block"></i>
                    </Form.Label>
                    <Form.Check.Input
                      onChange={(e) => handleTypeSelection(e.target.value)}
                      hidden
                      value="series"
                      id="type-series"
                      type="checkbox"
                      checked={params.type === "series"}
                    />
                  </Form.Check>
                  <Form.Check
                    className="p-0 flex-grow-1"
                    id="type-episode"
                    type="radio"
                  >
                    <Form.Label
                      className={`d-flex justify-content-center align-items-center btn btn-block btn-${
                        params.type === "episodes" ? "" : "outline-"
                      }primary`}
                      htmlFor="type-episodes"
                    >
                      Episodes <i className="bi bi-file mt-n1 ml-2 d-block"></i>
                    </Form.Label>
                    <Form.Check.Input
                      onChange={(e) => handleTypeSelection(e.target.value)}
                      hidden
                      value="episodes"
                      id="type-episodes"
                      type="checkbox"
                      checked={params.type === "episodes"}
                    />
                  </Form.Check>
                </div>
              </Form.Group>
            </div>
          </Accordion.Collapse>
        </div>
        <Button block type="submit">
          Search
        </Button>
      </Accordion>
    </Form>
  );
};
