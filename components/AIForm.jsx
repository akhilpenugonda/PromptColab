import Link from "next/link";

const AIForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} the chosen prompt here before you integrate it with any AI
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: 1, margin: "0 auto", width: "700px" }}>
          <form
            onSubmit={handleSubmit}
            className='mt-5 mr-5 w-full flex flex-col gap-7 glassmorphism'
          >
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Your Chosen AI Prompt Setting
              </span>

              <input
                value='Be an expert in coding'
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                type='text'
                placeholder='#Tag'
                required
                className='form_input'
                disabled= {true}
              />
            </label>
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Test your prompt here 
              </span>

              <textarea
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                placeholder='Give a use case here - e.g. "I want to create a new product that..."'
                required
                className='form_textarea '
              />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
              <Link href='/' className='text-gray-500 text-sm'>
                Cancel
              </Link>

              <button
                type='submit'
                disabled={submitting}
                className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
              >
                {submitting ? `${type}ing...` : type}
              </button>
            </div>
          </form>
        </div>
        <div style={{ flex: 1, margin: "0 auto", width: "700px" }}>
          <form
            onSubmit={handleSubmit}
            className='mt-5 ml-3 w-full flex flex-col gap-7 glassmorphism'
          >
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Your Chosen AI Prompt Setting
              </span>

              <input
                value='Be an expert in coding'
                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                type='text'
                placeholder='#Tag'
                required
                className='form_input'
                disabled= {true}
              />
            </label>
            <label>
              <span className='font-satoshi font-semibold text-base text-gray-700'>
                Test your prompt here 
              </span>

              <textarea
                value={post.prompt}
                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                placeholder='Give a use case here - e.g. "I want to create a new product that..."'
                required
                className='form_textarea '
              />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
              <Link href='/' className='text-gray-500 text-sm'>
                Refresh
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIForm;