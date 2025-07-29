const List_certifications = (props) => {
  const { certifications } = props;

  if (certifications.length != 0) {
    const list = certifications.map((data, index) => {
      return (
        <tr key={index}>
          <td>
            <h1>{data.judul}</h1>
          </td>

          <td>
            <p>{data.text}</p>
          </td>

          <td>
            <nav className="mt-5">
              <a
                className={`capitalize w-[90px] text-center inline-block ${data.color} p-2 text-white text-sm rounded-md hover:bg-blue-500 duration-200`}
                href={data.file}
              >
                {data.name}
              </a>
            </nav>
          </td>
        </tr>
      );
    });

    return list;
  } else {
    return (
      <>
        <p>certifications null</p>
      </>
    );
  }
};

const Certifications = (props) => {
  const { certifications } = props;

  return (
    <>
      <section className="lg:w-[1000px] w-[100%] m-auto sm:p-10 p-6">
        <header>
          <h1 className="bg-violet-500 text-white text-center capitalize font-bold md:text-4xl text-2xl md:px-8 px-8 py-1">
            certificate
          </h1>
        </header>

        <ul className="text-white pt-5">
          <table>
            <thead>
              <tr className="text-left">
                <th>judul</th>
                <th>deskripsi</th>
                <th>certificate</th>
              </tr>
            </thead>

            <tbody>
              <List_certifications certifications={certifications} />
            </tbody>
          </table>
        </ul>
      </section>
    </>
  );
};

export default Certifications;
