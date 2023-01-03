import reducer, { openModal, hideModal } from "redux/features/modalSlice";

describe("modal reducer", () => {
  const MockModal = () => {
    return <div>mock modal</div>
  }

  it("should set active modal", () => {
    const prevState = {
      activeModal: null,
    };

    expect(reducer(prevState, openModal(<MockModal />))).toEqual({
      activeModal: <MockModal />,
    });
  });

  it("should set active modal to null", () => {
    const prevState = {
      activeModal: <MockModal />,
    };

    expect(reducer(prevState, hideModal())).toEqual({
      activeModal: null,
    });
  });
});