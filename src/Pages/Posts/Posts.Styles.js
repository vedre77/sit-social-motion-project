import styled from "styled-components";

export const PostsPage = styled.div`
  margin-top: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat (5, 1fr);
  grid-gap: 1em;
  padding: 1em;
  width: 100%;

  .no-posts {
    position: absolute;
    top: 50%;
    left: 50%;
    border-bottom: 1px solid lightgray;
    padding: 1em;
    border-radius: 10px;
  }
  /* flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid blue;
  padding: .5em;
  gap: 1em; */
  /* height: fit-content; */
  /* width: 100vw;  */
  /* margin-left: 100px; */

` 