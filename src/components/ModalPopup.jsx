import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
export default function ModalPopup() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className=" relative h-screen font-openSans">
      <div className="absolute left-1/2 top-1/2 mx-auto w-full max-w-xl -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-lg border border-blueDark bg-blueDark px-8 py-2 text-white transition hover:bg-white hover:text-blueDark"
            onClick={() => setOpenModal(true)}
          >
            Open Modal Popup
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openModal && (
          <Modal
            onClose={() => setOpenModal(false)}
            header={<h2 className="text-2xl font-bold">New Header</h2>}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function Modal({ onClose, header, body, footer }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 cursor-pointer bg-black/50"
        onClick={onClose}
      ></motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 150, opacity: 100 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed left-1/2 mx-auto w-full max-w-xl -translate-x-1/2 rounded-md bg-white px-8 py-6">
          <div className="space-y-4">
            {header ? header : <h2 className="text-2xl font-bold">Header</h2>}
            {body ? (
              body
            ) : (
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus nisi eius, obcaecati est modi aspernatur minima quis
                dignissimos eligendi, quas et nostrum iure explicabo vero. Est
                aperiam sunt necessitatibus eos.
              </p>
            )}
            {footer ? (
              footer
            ) : (
              <div className="flex justify-end gap-5">
                <button
                  type="button"
                  className="rounded-md border border-blueDark bg-white px-6 py-2 text-blueDark transition hover:bg-blueDark hover:text-white"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="rounded-md border border-blueDark bg-blueDark px-6 py-2 text-white transition hover:bg-white hover:text-blueDark"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}
