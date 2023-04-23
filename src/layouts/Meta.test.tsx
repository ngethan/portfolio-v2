import { render, waitFor } from "@testing-library/react";

import { Meta } from "./Meta";

// Mock `next/head`: https://bradgarropy.com/blog/mocking-nextjs

describe("Meta component", () => {
    describe("Render method", () => {
        it("should a page title", async () => {
            const title = "Random title";

            render(<Meta title={title} description="Random description" />);

            await waitFor(() => {
                expect(document.title).toEqual(title);
            });
        });
    });
});
