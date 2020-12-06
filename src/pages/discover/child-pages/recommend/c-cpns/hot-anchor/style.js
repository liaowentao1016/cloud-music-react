import styled from "styled-components";

export const HotAnchorWrapper = styled.div`
  width: 250px;
  height: 334px;
  padding: 20px;
  .radio-list {
    padding-top: 20px;
    .item {
      display: flex;
      height: 50px;
      .image {
        width: 40px;
        height: 40px;
      }
      .info {
        padding-left: 14px;
        font-size: 12px;
        .name {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          color: #333;
        }
        .position {
          width: 160px;
          color: #666;
        }
      }
    }
  }
`;
