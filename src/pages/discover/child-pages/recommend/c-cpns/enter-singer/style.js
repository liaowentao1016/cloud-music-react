import styled from "styled-components";

export const EnterSingerWrapper = styled.div`
  padding: 20px;
  width: 250px;
  height: 495px;
  .singer-list {
    a {
      display: block;
      display: flex;
      margin-top: 14px;
      width: 210px;
      height: 62px;
      text-decoration: none;
      background-color: #fafafa;
      .info {
        padding-left: 14px;
        width: 148px;
        height: 62px;
        border: 1px solid #e9e9e9;

        .title {
          margin-top: 8px;
          font-size: 14px;
          color: #333;
          font-weight: 700;
        }
        .name {
          margin-top: 8px;
          font-size: 12px;
          color: #666;
        }
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
  .btn {
    margin-top: 20px;
    width: 210px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    cursor: pointer;
    color: #333;
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
  }
`;
