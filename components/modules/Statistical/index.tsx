const Statistical = () => {
  const listStatistical = [
    { key: 0, title: '30 Day Volume', value: '$1.80B' },
    { key: 1, title: 'Managed on testX.fi', value: '$0.84B' },
    { key: 2, title: 'Total Collateral Automated', value: '$21.43M' },
  ];

  return (
    <section className="container">
      <div className="bg-white/[.5] border border-white rounded-lg">
        <div className="px-3 md:px-10 lg:px-27 py-11 flex justify-between items-center flex-wrap gap-y-4">
          {listStatistical.map((itemStatistical) => (
            <div className="text-center w-full sm:w-1/3">
              <h3 className="text-3xl lg:text-5xl text-blue-900 mb-3">
                {itemStatistical.value}
              </h3>
              <p className="text-blue-gray-500">{itemStatistical.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistical;
